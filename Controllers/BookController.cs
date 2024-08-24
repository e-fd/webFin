using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.EntityFrameworkCore;
using webFin.Data;
using webFin.Data.Models;

namespace webFin.Controllers
{
    [Route("api/book")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BookController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Book - default
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            if (_context.Books == null)
            {
                return NotFound("No data found.");
            }
            return await _context.Books.ToListAsync();
        }

        // GET: api/Book/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _context.Books.FindAsync(id);

            if (book == null)
            {
                return NotFound("No data found.");
            }

            return book;
        }
        [HttpPost("filters")]
        public async Task<ActionResult<IEnumerable<Book>>> FilteredBooks(Filter filters)
        {
            if (_context.Books == null)
            {
                return NotFound("No data found.");
            }
            List<Book> allData = await _context.Books.ToListAsync();
            if (filters.All == true)
            {
                return allData;
            }
            /*if (filters.Title != null)
            {
                allData = allData.Where(e=>e.Title ==  filters.Title).ToList();
            }
            if (filters.Author != null)
            {
                allData = allData.Where(e => e.Author == filters.Author).ToList();
            }*/
            if (filters.Genre != null)
            {
                allData = allData.Where(e => e.Genre == filters.Genre).ToList();
            }
            if (filters.Type != null)
            {
                allData = allData.Where(e => e.Type == filters.Type).ToList();
            }
            if (filters.Year != null)
            {
                allData = allData.Where(e => e.Year == filters.Year).ToList();
            }

            return allData;
        }

        // PUT: api/Book/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(int id, Book book)
        {
            if (id != book.ID)
            {
                return BadRequest("Нет возможности изменить книгу.");
            }

            _context.Entry(book).State = EntityState.Modified;

            try
            {
                Book entry_ = await _context.Books.FirstAsync(e=> e.ID == book.ID);
                if (entry_.Title != book.Title)
                {
                    entry_.Title = book.Title;  
                }
                if (entry_.Author != book.Author)
                {
                    entry_.Author = book.Author;
                }
                if (entry_.Genre != book.Genre)
                {
                    entry_.Genre = book.Genre;
                }
                if (entry_.Type != book.Type)
                {
                    entry_.Type = book.Type;
                }
                if (entry_.Year != book.Year)
                {
                    entry_.Year = book.Year;
                }
                if (entry_.Publisher != book.Publisher)
                {
                    entry_.Publisher = book.Publisher;
                }
                if (entry_.Count != book.Count)
                {
                    entry_.Count = book.Count;
                }
                if (entry_.ISBN != book.ISBN)
                {
                    entry_.ISBN = book.ISBN;
                }
                if (entry_.Summary != book.Summary)
                {
                    entry_.Summary = book.Summary;
                }
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(id))
                {
                    return NotFound("Искомой книги не существует.");
                }
                else
                {
                    throw;
                }
            }

            return Ok("Книга успешно изменена.");
        }

        // POST: api/Book
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            if (_context.Books == null)
            {
                return Problem("Entity set 'Books' is null.");
            }
            try
            {
                _context.Books.Add(book);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException e)
            {
                return BadRequest("Не могу создать новую книгу: " + e.Message);
            }
            return CreatedAtAction("GetBook", new { id = book.ID }, book);
        }

        // DELETE: api/Book/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            if (_context.Books == null)
            {
                return NotFound("No data found.");
            }
            var book = await _context.Books.FirstAsync(e=> e.ID == id);
            if (book == null)
            {
                return NotFound("Искомой книги не существует.");
            }

            Book entry_ = await _context.Books.FirstAsync(e => e.ID == book.ID);
            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return Ok("Книга успешно удалена.");
        }

        private bool BookExists(int id)
        {
            return _context.Books.Any(e => e.ID == id);
        }
    }
}
