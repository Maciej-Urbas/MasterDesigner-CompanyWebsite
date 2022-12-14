using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormsController : ControllerBase
    {
        private readonly FormContext _context;

        public FormsController(FormContext context)
        {
            _context = context;
        }

        // GET: api/Forms
        [HttpGet("GetForms")]
        public async Task<ActionResult<IEnumerable<FormsDto>>> GetForms()
        {
            if (_context.forms == null)
            {
                return NotFound();
            }

            return await _context.forms.Select(x => ItemFormsDto(x)).ToListAsync();
        }

        

        // GET: api/Forms/5
        [HttpGet("GetForm/{id}")]
        public async Task<ActionResult<FormsDto>> GetForm(long id)
        {
            var data = await _context.forms.FindAsync(id);

            if (data == null)
            {
                return NotFound();
            }

            return  ItemFormsDto(data);
        }

        // PUT: api/Forms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("PutForm/{id}")]
        public async Task<IActionResult> PutForm(long id, FormsDto formsDto)
        {
            if (id != formsDto.Id)
            {
                return BadRequest();
            }

            var data = await _context.forms.FindAsync(id);
            if (data == null)
            {
                return NotFound();
            }

            data.Id = formsDto.Id;
            data.Name = formsDto.Name;
            data.Topic = formsDto.Topic;
            data.Email = formsDto.Email;
            data.Message = formsDto.Message;
            data.Ip = formsDto.Ip;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!FormModelExists(id))
            {
                return NotFound();
            }

            return NoContent();
        }

        // POST: api/Forms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("PostForm")]
        public async Task<ActionResult<FormsDto>> PostForm(FormsDto formsDto)
        {
            var data = new Forms
            {
                Name = formsDto.Name,
                Topic = formsDto.Topic,
                Email = formsDto.Email,
                Message = formsDto.Message,
                Ip = formsDto.Ip
            };


            _context.forms.Add(data);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetForms), new { id = formsDto.Id }, ItemFormsDto(data));
        }

        // DELETE: api/Forms/DeleteForm/5
        [HttpDelete("DeleteForm/{id}")]
        public async Task<IActionResult> DeleteForm(long id)
        {
            var data = await _context.forms.FindAsync(id);
            if (data == null)
            {
                return NotFound();
            }

            _context.forms.Remove(data);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FormModelExists(long id)
        {
            return (_context.forms?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        private static FormsDto ItemFormsDto(Forms forms)
        {
            return new FormsDto
            {
                Id = forms.Id,
                Name = forms.Name,
                Topic = forms.Topic,
                Email = forms.Email,
                Message = forms.Message,
                Ip = forms.Ip
            };
        }
    }
}
