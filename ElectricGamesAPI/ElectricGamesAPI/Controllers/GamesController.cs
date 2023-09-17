using ElectricGamesAPI.Data;
using ElectricGamesAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ElectricGamesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors]
    public class GamesController : Controller
    {
        public readonly GamesApiDbContext dbContext;
        public GamesController(GamesApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> getAllGames()
        {
            return Ok(await dbContext.Games.ToListAsync());
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> getOneGame([FromRoute] Guid id)
        {

            var game = await dbContext.Games.FindAsync(id);
            if (game == null)
            {
                return BadRequest();
            }
            return Ok(game);
        }



        [HttpPost]
        public async Task<IActionResult> AddGame(AddGamesRequest addGamesRequest)
        {
            var games = new Games()
            {
                Id = Guid.NewGuid(),
                Title = addGamesRequest.Title,
                Plateform = addGamesRequest.Plateform,
                ReleaseYear = addGamesRequest.ReleaseYear,
                Image = addGamesRequest.Image,
            };
            await dbContext.Games.AddAsync(games);
            await dbContext.SaveChangesAsync();
            return Ok(games);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> updateGame([FromRoute] Guid id, updateGamesRequest updateGamesRequest)
        {
            var game = await dbContext.Games.FindAsync(id);
            if (game != null)
            {
                game.Title = updateGamesRequest.Title;
                game.Plateform = updateGamesRequest.Plateform;
                game.Image = updateGamesRequest.Image;
                game.ReleaseYear = updateGamesRequest.ReleaseYear;
                await dbContext.SaveChangesAsync();
                return Ok(game);
            }
            return NotFound();

        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteGame([FromRoute] Guid id)
        {
            var game = await dbContext.Games.FindAsync(id);
            if (game != null)
            {
                dbContext.Games.Remove(game);
                await dbContext.SaveChangesAsync();
                return Ok(game);
            }
            return NotFound();
        }

        [HttpPost("UploadImage")]
        public string UploadImage(IFormFile file)
        {
            try
            {
                string FileName = file.FileName;

                string uniqueFileName = Guid.NewGuid().ToString() + "_" + FileName;
                var imagePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/Uploads/Games", FileName);
                file.CopyTo(new FileStream(imagePath, FileMode.Create));
                return "File Uploaded Successfully ...";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
