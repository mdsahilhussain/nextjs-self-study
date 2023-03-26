export const getAllUser = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      return new Error("Something went wrong");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetail = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      return new Error("Something went wrong");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserPost = async (id) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    if (!res.ok) {
      return new Error("Something went wrong");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
