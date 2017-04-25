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
    public class RandomController : ApiController
    {

        public IHttpActionResult Get()
        {
            // this where you talk to your database
            var ran = new Random();
            var marbles = new MarbleContext().MarbleColour.ToList();
            var randomIndex = new Random().Next(0, marbles.Count); //index is the position in the list
            var randomMarble = marbles[randomIndex];

            return Ok(randomMarble);

        }
    }
}
