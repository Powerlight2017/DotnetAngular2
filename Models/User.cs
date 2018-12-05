using System;
using System.Collections.Generic;

namespace dotnetEtalon.Models
{
    public partial class User
    {
        public User()
        {
            UserPermissions = new HashSet<UserPermissions>();
        }

        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual ICollection<UserPermissions> UserPermissions { get; set; }
    }
}
