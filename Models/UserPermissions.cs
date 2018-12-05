using System;
using System.Collections.Generic;

namespace dotnetEtalon.Models
{
    public partial class UserPermissions
    {
        public int UserId { get; set; }
        public string PermissionName { get; set; }

        public virtual User User { get; set; }
    }
}
