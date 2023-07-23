

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
};

const user = { firstName: 'Harper', lastName: 'Perez' };

function App() {
  return (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
}

export default App;
