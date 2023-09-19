using LoginAPI.Model;
using static UserService;

namespace LoginAPI.Services
{
    public interface IUserService
    {
        Task<string> Register(RegisterModel registerModel);
        Task<User> Login(LoginModel loginModel);
    }


}