export const GET = async (path: string, base?: string, data: any = {}) => {
  try {
    let urlString = path;
    if (base) {
      urlString = new URL(path, base).toString();
    }
    const responseRaw = await fetch(urlString, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    });
    const response = await responseRaw.json();
    if (!response.success) {
      return {
        error: true,
        message: response.message
      };
    }
    return response.data; // parses JSON response into native JavaScript objects
  } catch (error) {
    return {
      error: true,
      message: error && error.message ? error.message : 'Unexpected error'
    };
  }
};
