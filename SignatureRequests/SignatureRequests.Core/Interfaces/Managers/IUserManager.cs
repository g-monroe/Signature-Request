﻿using SignatureRequests.Core.Entities;
using SignatureRequests.Core.RequestObjects;
using SignatureRequests.Core.ResponseObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignatureRequests.Core.Interfaces.Managers
{
    public interface IUserManager
    {
        UserResponseList GetUsers();
        UserResponse GetUser(int id);
        UserResponse CreateUserEntity(UserRequest newUser);
        UserResponse UpdateUser(int id, UserRequest newUser);
        string GetName(int id);
        string GetEmail(int id);
        string GetRole(int id);
        void Delete(int id);
        UserResponseList GetAllInclude();
        UserResponseList UserToListResponse(IEnumerable<UserEntity> me);
        UserEntity UserToDbItem(UserRequest me, UserEntity updating = null);
        UserResponse UserToListItem(UserEntity me);
        SignatureResponse GetSignatureObject(int id);
        string GetSignaturePath(int id);
        SignatureResponse SignaturetoSignatureResponse(SignatureEntity data);

    }
}
