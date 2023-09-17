
using ElectricGamesAPI.Models;
using Microsoft.EntityFrameworkCore;
namespace ElectricGamesAPI.Data
{
    public class GamesApiDbContext : DbContext
    {
        // public GamesApiDbContext(DbContextOptions options) : base(options) {}
        public GamesApiDbContext(DbContextOptions<GamesApiDbContext> options) : base(options) { }
        public DbSet<Games> Games { get; set; }
    }
}
