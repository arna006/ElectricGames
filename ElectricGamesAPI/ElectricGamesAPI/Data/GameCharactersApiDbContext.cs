using ElectricGamesAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ElectricGamesAPI.Data
{
    public class GameCharactersApiDbContext : DbContext
    {
        public GameCharactersApiDbContext(DbContextOptions options) : base(options) { }
        public DbSet<GameCharacters> GameCharacters { get; set; }
    }
}
