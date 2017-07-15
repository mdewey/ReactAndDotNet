using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactAndDotNet.Controllers
{
    [Route("api/workouts")]
    public class ValuesController : Controller
    {
        public static Dictionary<string, string> Workouts = new Dictionary<string,string>{
            {"monday", "Yoga"},
            {"tuesday", "Yoga & Run"},
            {"wednesday", "Yoga & Sprint"},
            {"thursday", "yoga & lift"}, 
            {"friday", "yoga & run"}, 
            {"saturday", "yoga & sprint"}, 
            {"sunday", "yoga & lift"}
        };
        [HttpGet]
        public Dictionary<string,string> Get()
        {
            return Workouts;
        }

        // GET api/values/5
        [HttpGet("{day}")]
        public string Get(string day)
        {
            return Workouts[day];
        }
    }
}
