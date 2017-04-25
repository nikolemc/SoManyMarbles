using SoManyMarbles.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;


namespace SoManyMarbles.DataContext
{
    public class MarbleContext :DbContext
    {
        public DbSet<Marble> MarbleColour { get; set; }
    }
}