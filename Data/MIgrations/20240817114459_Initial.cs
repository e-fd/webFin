using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webFin.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "ntext", nullable: true),
                    Author = table.Column<string>(type: "ntext", nullable: true),
                    Genre = table.Column<string>(type: "ntext", nullable: true),
                    Type = table.Column<string>(type: "ntext", nullable: true),
                    Year = table.Column<int>(type: "int", nullable: true),
                    Publisher = table.Column<string>(type: "ntext", nullable: true),
                    Count = table.Column<int>(type: "int", nullable: true),
                    ISBN = table.Column<long>(type: "bigint", nullable: true),
                    Summary = table.Column<string>(type: "ntext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Books");
        }
    }
}
