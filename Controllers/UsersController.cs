using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using dotnetEtalon.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net;
using Microsoft.AspNetCore.Authorization;


namespace WebApplication
{
    [Route("api/[controller]")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true, Duration = -1)]
    public class UsersController : Controller
    {
        private DataBaseDotnetCoreContext _context;

        public UsersController(DataBaseDotnetCoreContext context)
        {
            _context = context;
        }


        [HttpGet]
        [AllowAnonymous]
        [Route("getpaged")]
        public JsonResult GetUsersPages(string Skip, string Take)
        {

            var data = _context.User.OrderByDescending(x => x.Id).Skip(Convert.ToInt32(Skip)).Take(Convert.ToInt32(Take)).ToList();
            foreach (User user in data)
                user.UserPermissions = _context.UserPermissions.Where(x => x.UserId == user.Id).ToList();

            int count = _context.User.Count();

            return new JsonResult(new { Count = count, UserList = data });
        }


        [HttpPost]
        public string Post([FromBody] User User)
        {
            Response.StatusCode = 200;

            try
            {
                dotnetEtalon.Models.User newUser = new User();
                newUser.Email = User.Email;
                newUser.Password = User.Password;

                _context.User.Add(newUser);
                _context.SaveChanges();


                User.UserPermissions.ToList().ForEach(x =>
                {

                    _context.UserPermissions.Add(new UserPermissions() { UserId = newUser.Id, PermissionName = x.PermissionName });

                });

                _context.SaveChanges();

            }
            catch (Exception e)
            {
                Response.StatusCode = 400;
                return e.ToString();
            }
            return "OK";
        }
        [HttpPut]
        public string Put([FromBody] User user)
        {
            Response.StatusCode = 200;

            try
            {

                _context.User.Attach(user);
                _context.Entry(user).State = EntityState.Modified;
             
                // Убираем те пермишены которых нет в объекте который обновляем
                _context.UserPermissions.RemoveRange(_context.UserPermissions.Where(x => !user.UserPermissions.Contains(x) && x.UserId == user.Id));
                // Добавляем те которых в БД нету
                _context.UserPermissions.AddRange(user.UserPermissions.Where(x=> !_context.UserPermissions.Contains(x)));

                _context.SaveChanges();

            }
            catch (Exception e)
            {
                Response.StatusCode = 400;
                return e.ToString();
            }
            return "OK";
        }

        [HttpDelete]
        public String Delete(int id)
        {
            Response.StatusCode = 200;

            try
            {
                dotnetEtalon.Models.User newUser = new User();
                newUser.Id = id;
                _context.User.Remove(newUser);
                _context.SaveChanges();

            }
            catch (Exception e)
            {
                return e.ToString();
            }
            return "OK";
        }
    }
}