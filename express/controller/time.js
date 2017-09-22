function getTime() {
  return new Promise((resolve, reject) => {
    try {
      const start = new Date().getTime();
      setTimeout(() => {
        const end = new Date().getTime();
        const between = end - start;
        resolve(between);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
}

async function getDate() {
  const between = await getTime();
  console.log(between);
}

getDate();