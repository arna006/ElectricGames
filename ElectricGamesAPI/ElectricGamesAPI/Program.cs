using ElectricGamesAPI.Data;
using Microsoft.EntityFrameworkCore;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("*").AllowAnyHeader().AllowAnyHeader().WithMethods("GET", "POST", "DELETE", "PUT");
        });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// builder.Services.AddDbContext<GamesApiDbContext>(options => options.UseInMemoryDatabase("GamesDb"));
//builder.Services.AddDbContext<GameCharactersApiDbContext>(options => options.UseInMemoryDatabase("GamesDb"));
builder.Services.AddDbContext<GamesApiDbContext>(options =>
   options.UseSqlServer(builder.Configuration.GetConnectionString("ElectricGamesApiConnectionString")));
builder.Services.AddDbContext<GameCharactersApiDbContext>(options =>
   options.UseSqlServer(builder.Configuration.GetConnectionString("ElectricGamesApiConnectionString")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);
app.UseStaticFiles();

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
