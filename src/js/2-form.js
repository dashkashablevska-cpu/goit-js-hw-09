const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formState = { email: '', message: '' };

function loadFormState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    formState.email = parsed.email ?? '';
    formState.message = parsed.message ?? '';
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }

  form.elements.email.value = formState.email;
  form.elements.message.value = formState.message;
}

loadFormState();

form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (!(name in formState)) return;

  formState[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formState.email || !formState.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formState);

  localStorage.removeItem(STORAGE_KEY);
  formState = { email: '', message: '' };
  form.reset();
});
