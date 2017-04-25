using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SoManyMarbles.DataContext;
using SoManyMarbles.Models;


namespace SoManyMarbles.Controllers
{
    public class MarbleController : ApiController
    {

        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(new MarbleContext().MarbleColour.ToList());
        }

        [HttpPost]
        public IHttpActionResult AddMarble(Marble marble)
        {

            var db = new MarbleContext();
            db.MarbleColour.Add(marble);
            db.SaveChanges();
            return Ok(marble);
        }
    }
}
