using System;
using System.Collections.Generic;

namespace dotnetEtalon.Models
{
    public partial class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Bik { get; set; }
        public string Rs { get; set; }
        public string Ks { get; set; }
    }
}
