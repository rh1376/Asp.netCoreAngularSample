using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vega.Core.Models;

namespace vega.Core
{
    public interface IPhotoRepository
    {
        Task<IEnumerable<Photo>> GetPhotos(int vehicleId);
    }
}
