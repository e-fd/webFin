using System.Collections.Specialized;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webFin.Data.Models
{
    public class Book
    {
        [Key] public int ID { get; set; }
        [Column(TypeName = "ntext")] public string? Title { get; set; } = "Title";
        [Column(TypeName = "ntext")] public string? Author { get; set; } = "Author";
        [Column(TypeName = "ntext")] public string? Genre { get; set; } = "Genre";
        [Column(TypeName = "ntext")] public string? Type { get; set; } = "Type";
        [Column(TypeName = "int")] public int? Year { get; set; } = 1999;
        [Column(TypeName = "ntext")] public string? Publisher { get; set; } = "Publisher";
        [Column(TypeName = "int")] public int? Count { get; set; } = 0;
        [Column(TypeName = "bigint")] public long? ISBN { get; set; } = 999999999999999;
        [Column(TypeName = "ntext")] public string? Summary { get; set; } = "Summary";
    }
}
