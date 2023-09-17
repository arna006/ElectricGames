using ElectricGamesAPI.Data;
using ElectricGamesAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ElectricGamesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GamesCharactersController : Controller
    {
        public readonly GameCharactersApiDbContext dbContext;
        public GamesCharactersController(GameCharactersApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> getAllGameCharacters()
        {
            return Ok(await dbContext.GameCharacters.ToListAsync());
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> getOneGameCharacter([FromRoute] Guid id)
        {

            var gameCharacter = await dbContext.GameCharacters.FindAsync(id);
            if (gameCharacter == null)
            {
                return BadRequest();
            }
            return Ok(gameCharacter);
        }



        [HttpPost]
        public async Task<IActionResult> AddGameCharacter(AddGameCharacterRequest addGameCharacterRequest)
        {
            var gameCharacter = new GameCharacters()
            {
                Id = Guid.NewGuid(),
                Name = addGameCharacterRequest.Name,
                Game = addGameCharacterRequest.Game,
                Image = addGameCharacterRequest.Image,
            };
            await dbContext.GameCharacters.AddAsync(gameCharacter);
            await dbContext.SaveChangesAsync();
            return Ok(gameCharacter);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> updateGameCharacter([FromRoute] Guid id, UpdateGameCharacterReuqest updateGamecharacterRequest)
        {
            var gameCharacter = await dbContext.GameCharacters.FindAsync(id);
            if (gameCharacter != null)
            {
                gameCharacter.Name = updateGamecharacterRequest.Name;
                gameCharacter.Game = updateGamecharacterRequest.Game;
                gameCharacter.Image = updateGamecharacterRequest.Image;

                await dbContext.SaveChangesAsync();
                return Ok(gameCharacter);
            }
            return NotFound();

        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteGameCharacter([FromRoute] Guid id)
        {
            var gameCharacter = await dbContext.GameCharacters.FindAsync(id);
            if (gameCharacter != null)
            {
                dbContext.GameCharacters.Remove(gameCharacter);
                await dbContext.SaveChangesAsync();
                return Ok(gameCharacter);
            }
            return NotFound();
        }
    }
}
