﻿namespace ElectricGamesAPI.Models
{
    public class Games
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Plateform { get; set; }
        public string ReleaseYear { get; set; }
        public string Image { get; set; }

    }
}
