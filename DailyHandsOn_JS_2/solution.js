// //!important:  1. Filter out users who are from the company with the name "Romaguera-Crona".

const filteredData = fetch("users.json")
  .then((response) => response.json())
  .then((usersData) => {
    const filteredUsers = usersData.filter(
      (user) => user.company.name === "Romaguera-Crona"
    );

    console.log(filteredUsers);
  })
  .catch((error) => console.error("Error:", error));

// !important:2. For each user, create a function that will return new object that includes only the id, name, and a new property called emailLength, which represents the length of the user's email address.

const userObject = function () {
  fetch("users.json")
    .then((response) => response.json())
    .then((usersdata) => {
      const extractedData = usersdata.map((item) => ({
        id: item.id,
        name: item.name,
        emailLength: item.email.length,
      }));
      console.log(extractedData);
      return extractedData;
    });
};
userObject();

// !important:3. Create a function that will calculate and return the number of posts made by each user.
const numberOfPosts = function () {
  fetch("posts.json")
    .then((response) => response.json())
    .then((postsDetail) => {
      const postFrequency = {};

      postsDetail.forEach((item) => {
        const userId = item.userId;

        if (!postFrequency[userId]) {
          postFrequency[userId] = 1;
        } else {
          postFrequency[userId]++;
        }
      });
      console.log(postFrequency);
      return postFrequency;
    });
};
numberOfPosts();

// !importanat:4. Create a function that returns a list of users along with their associated posts. (Refer to format below ) :

const makingPost = async () => {
  const userResponse = await fetch("users.json");
  const postResponse = await fetch("posts.json");

  const users = await userResponse.json();
  const posts = await postResponse.json();

  const usersWithPosts = [];

  users.forEach((user) => {
    const userId = user.id;
    if (!usersWithPosts[userId]) {
      usersWithPosts[userId] = {
        username: user.username,
        posts: posts.filter((post) => post.userId === userId),
      };
    }
  });
  console.log(usersWithPosts);
  return usersWithPosts;
};

makingPost();

// !imporatnat: 5.  Create a function that returns all completed tasks by the user. Like if I want to get all the completed tasks of the user with ID 1 then it will return all the completed tasks of the user with ID 1.

const findpostuid = async () => {
  const tasksResponse = await fetch("tasks.json");

  const tasks = await tasksResponse.json();

  const completedtasks = tasks.filter((item) => {
    if (item.userId === 1 && item.completed === true) {
      console.log(item);
      return item;
    }
  });

  console.log(completedtasks);
  return completedtasks;
};

findpostuid();
