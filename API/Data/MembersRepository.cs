using System;
using API.Interfaces;
using API.Entities;

namespace API.Data;

public class MembersRepository : IMembersRepository
{
    public Task<Member?> GetMemberAsync(string id)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<Member>> GetMembersAsync()
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<Photo>> GetPhotoAsync(string memberId)
    {
        throw new NotImplementedException();
    }

    public Task<bool> SaveAllAsync()
    {
        throw new NotImplementedException();
    }

    public void Update(Member member)
    {
        throw new NotImplementedException();
    }
}