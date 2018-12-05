using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace PaperSource.AspNetCoreAuthorization.Services.Permissions
{
    public class PermissionHandler : AuthorizationHandler<PermissionRequirement>
    {
        protected override Task HandleRequirementAsync(
            AuthorizationHandlerContext context,
            PermissionRequirement requirement)
        {
            bool allPermissionsAvail = true;

            foreach (Permission per in requirement.Permissions)
            {
                switch (per)
                {
                    case Permission.edit:
                        if (context.User.Claims.Count(x => x.Type.ToLower() == "permission-edit") == 0)
                            allPermissionsAvail = false;
                        break;

                    case Permission.permissionSpecialSections:
                        if (context.User.Claims.Count(x => x.Type.ToLower() == "permission-special-sections") == 0)
                            allPermissionsAvail = false;
                        break;

                    default:
                        break;
                }
            }

            // Все запрошенные пермишены есть в клеймс пользователя - все ОК
            if (allPermissionsAvail) context.Succeed(requirement);

            return Task.CompletedTask;
        }
    }
}