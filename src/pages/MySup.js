import React from 'react';

const MySup = () => { /*Halaman akun milik pengembang app*/
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>@jonathanclei</h1>
      <div style={styles.imageContainer}>
        <img src="https://i.pinimg.com/736x/fc/57/57/fc575784e5c13b7a604a10ac3a29f96b.jpg" alt="Recent Post" style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    marginBottom: "30px",
  },
  heading: {
    color: 'DodgerBlue',
    fontSize: '24px',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column', //biar gambar vertikal
    alignItems: 'center',
    marginTop: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '720px',
    borderRadius: '10px',
    margin: '10px',
  },
};

export default MySup;
