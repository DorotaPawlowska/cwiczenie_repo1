// add admin cloud function
const adminForm = document.querySelector('.admin-actions');
adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const adminEmail = document.querySelector('#admin-email').value;
    const addAdminRole = functions.httpsCallable('addAdminRole');
    addAdminRole({ email: adminEmail }).then(result => {
        console.log(result);
    });
});


//listen for auth status changes
auth.onAuthStateChanged(user => {
    // console.log(user);
    if(user){
        user.getIdTokenResult().then(idTokenResult => {
            user.admin = idTokenResult.claims.admin;
            setupUI(user);
        })
        // console.log('user logged in: ', user);
        //get data
        db.collection('guides').onSnapshot(snapshot => {
                setupGuides(snapshot.docs);
            }, err => console.log(err.message));
    }else{
        setupUI();
        // console.log('user logged out.');
        setupGuides([]);
    }
})

//create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('guides').add({
        title: createForm['title'].value, // można tak []
        content: createForm.content.value // albo tak . 
    }).then(() => {
        //close the modal and reset form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(err => {
        console.log(err.message);
    })
})

// sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // console.log(email, password);
    
    //sign up the user
    auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            return db.collection('users').doc(cred.user.uid).set({
                bio: signupForm['signup-bio'].value
            })
        }).then(() => {
            // console.log(cred.user);
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close();
            signupForm.reset();
            signupForm.querySelector('.error').innerHTML = '';
        }).catch(err => {
            signupForm.querySelector('.error').innerHTML = err.message;
        });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
        // .then(() => {
        //     console.log('user logout');
        // });
});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            // console.log(cred.user);
            const modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal).close();
            loginForm.reset();
            loginForm.querySelector('.error').innerHTML = '';
        }).catch(err => {
            loginForm.querySelector('.error').innerHTML = err.message;
        });
})
