using System;
using System.Collections.Generic;

namespace ReactAndDotNet.Models
{
    public class Result
    {
        public int Score { get; set; }
        public string Name { get; set; }
    }

    public class ScoreDetails
    {
        public IEnumerable<Result> Scores { get; set; }
        public string TimeUpdated { get; set; } = DateTime.Now.ToString("MM/dd/yy H:mm:ss");
    }

}