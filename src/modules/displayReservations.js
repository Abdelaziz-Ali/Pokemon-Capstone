/* App Api */
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tngK8NfXluNWvAs7EHbF/reservations';

/* Getting reservations list from the Involvement API */
const DisplayReservations = async () => {
  const openModalBtn = document.querySelectorAll('[data-modal-target]');
  openModalBtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const res = await fetch(`${BASE_URL}?item_id=${btn.id}`);
      const data = await res.json();
      const div = document.getElementById('reservations-list');
      div.innerHTML = '';
      data.forEach((reservation) => {
        const li = document.createElement('li');
        li.innerHTML = `${reservation.date_start} - ${reservation.date_end} by ${reservation.username}`;
        div.appendChild(li);
      });
    });
  });
};

export default DisplayReservations;