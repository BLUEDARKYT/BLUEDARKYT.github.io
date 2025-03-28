// Fungsi untuk membaca dan menulis file JSON (simulasi database)
async function readUsers() {
    const response = await fetch('users.json');
    return await response.json();
}

async function writeUsers(users) {
    await fetch('users.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ users })
    });
}

// Pendaftaran (signup)
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        const data = await readUsers();
        if (data.users.find(user => user.email === email)) {
            alert('Email sudah terdaftar.');
            return;
        }

        data.users.push({ email, password });
        await writeUsers(data.users);
        alert('Pendaftaran berhasil!');
        window.location.href = 'login.html';
    });
}

// Masuk (login)
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const data = await readUsers();
        const user = data.users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Masuk berhasil!');
            // Redirect ke halaman beranda atau halaman lain yang sesuai
        } else {
            alert('Email atau kata sandi salah.');
        }
    });
}