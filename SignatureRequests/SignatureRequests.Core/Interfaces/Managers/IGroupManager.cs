﻿using SignatureRequests.Core.Entities;
using SignatureRequests.Core.RequestObjects;
using SignatureRequests.Core.ResponseObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace SignatureRequests.Core.Interfaces.Managers
{
    public interface IGroupManager
    {
        //need to be changed .
        FormResponseList GetForms();
        FormResponseList GetFormsById(int id);
        FormResponseList GetFormsByUserId(int id);
        Task SaveDocumentAsync(MultipartMemoryStreamProvider provider);
        FormEntity GetForm(int id);
        FormEntity CreateFormEntity(FormEntity newForm);
        FormEntity UpdateForm(FormEntity form, FormEntity newForm);
        void Delete(int id);
        FormResponseList FormToListResponse(IEnumerable<FormEntity> forms);
        FormResponse EditForm(int id, FormRequest form, FormEntity updating = null);
        FormResponse AddForm(FormRequest form, FormEntity updating = null);
    }
}
