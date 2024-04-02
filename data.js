   // Пример использования API Unsplash для получения случайной фотографии
   const url = 'https://api.unsplash.com/photos/random/?client_id=Wy397DFgtUFjMBBmKEMDsvGjYlgLYW-Z2T26MmZs9Vc';
   

   fetch(url)
       .then(response => response.json())
       .then(data => {
           console.log(data);
           const imageData = {
               imageUrl: data.urls.regular,
               authorName: data.user.name,
               authorUsername: data.user.username
           };
              
   const contentDiv = document.getElementById('content');

   const imageElement = document.createElement('img');
   imageElement.src = imageData.imageUrl;
   imageElement.alt = 'Random Image';
   contentDiv.appendChild(imageElement);

   const headingElement = document.createElement('h2');
   headingElement.textContent = imageData.authorName + " " + imageData.authorUsername;
   contentDiv.appendChild(headingElement);

           console.log(imageData);
       })
       .catch(error => console.log('Error:', error));

   

