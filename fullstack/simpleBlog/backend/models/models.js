import conn from "./connection.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
const { TJTJ } = process.env;
export default class Models {
  static async getUser(email, userName, userId) {
    let query;
    if (email !== null) {
      query = "SELECT * FROM users WHERE email = ? ";
      try {
        let [user] = await conn.query(query, [email]);

        if (user.length > 0) {
          return { success: true, body: user };
        } else {
          return { success: false, message: "email not found" };
        }
      } catch (error) {
        return { success: false, message: "email not found" };
      }
    } else if (userName !== null) {
      query = "SELECT * FROM users WHERE userName = ? ";
      try {
        let [user] = await conn.query(query, [userName]);
        if (user.length > 0) {
          return { success: true, body: user };
        } else {
          return { success: false, message: "userName not found" };
        }
      } catch (error) {
        return { success: false, message: "userName not found" };
      }
    } else if (userId !== null) {
      query = `SELECT * FROM users WHERE userId=?`;
      try {
        let [user] = await conn.query(query, [userId]);
        if (user.length > 0) {
          return { success: true, body: user };
        } else {
          return { success: false, message: "id is not found" };
        }
      } catch (error) {
        return { success: false, message: error.message };
      }
    }
  }
  static async addUser(email, userName, pass) {
    let query = `INSERT INTO users(email , userName , password) VALUES(? , ? ,?);`;

    let addStatus;
    try {
      addStatus = await conn.query(query, [email, userName, pass]);

      if (addStatus[0].insertId > 0) {
        return {
          success: true,
          message: "create user successfully",
          body: { id: addStatus[0].insertId },
        };
      } else {
        return { success: false, message: "can not add in usersDB" };
      }
    } catch (error) {
      return { sucess: false, message: error.message + "users" };
    }
  }
  static async getToken(userId) {
    const token = jwt.sign({ userId }, TJTJ, {
      noTimestamp: true,
      expiresIn: "1d",
    });
    return token;
  }
  static async updateUser(dto) {
    let query = "UPDATE users SET ";
    const { userId, ...restDto } = dto;

    let keys = Object.keys(restDto);
    let values = Object.values(restDto);
    let setClause = keys.map((key) => `${key} = ?`).join(", ");
    query += setClause + " WHERE userId = ?";
    values.push(userId);
    // console.log(query);
    // console.log(values);
    try {
      const [response] = await conn.query(query, values);
      if (response.affectedRows > 0) {
        return true;
      }
      return false;
    } catch (error) {
      return error;
    }
  }
  static async deleteUser(userId) {
    let query = "DELETE FROM users WHERE userId= ?";
    try {
      try {
        const response = await conn.query(query, [userId]);
        return response;
      } catch (error) {
        return error;
      }
    } catch (error) {
      return error;
    }
  }
  static async getPosts(userId, postId) {
    if (userId != null) {
      const query = "SELECT * FROM posts WHERE userId = ? ;";
      try {
        const [posts] = await conn.query(query, [userId]);
        return posts;
      } catch (error) {
        return error;
      }
    } else if (postId !== null) {
      const query = "SELECT * FROM posts WHERE postId = ? ;";
      try {
        const [post] = await conn.query(query, [postId]);
        return post;
      } catch (error) {
        return error;
      }
    } else {
      try {
        const query = "SELECT * FROM posts ;";
        try {
          const [posts] = await conn.query(query);
          return posts;
        } catch (error) {
          return error;
        }
      } catch (error) {
        return error;
      }
    }
  }
  static async deletePost(postid) {
    const query = "DELETE FROM posts WHERE postId= ?";
    try {
      const response = await conn.query(query, [postid]);
      return response;
    } catch (error) {
      return error;
    }
  }
  static async addPost(userId, title, text, postImg, postId) {
    console.log("helo");
    if (postId === undefined) {
      const query =
        "INSERT INTO posts(userId , title , text , postImg ) Values(? , ? , ? ,?);";
      try {
        const [result] = await conn.query(query, [
          userId,
          title,
          text,
          postImg,
        ]);
        console.log(result);
        return result;
      } catch (error) {
        return error;
      }
    } else {
      const keys = Object.keys;
      const query =
        "UPDATE posts SET userId = ?,title = ?  ,text= ? , postImg = ? WHERE postId = ?;";
      try {
        const result = await conn.query(query, [
          userId,
          title,
          text,
          postImg,
          postId,
        ]);
        console.log(result);
        return result;
      } catch (error) {
        return error;
      }
    }
  }
  static async getUserName(postId) {
    try {
      let query = `SELECT userId FROM posts WHERE postId = ?;  `;
      const [[{ userId }]] = await conn.query(query, [postId]);

      try {
        query = "SELECT userName FROM users WHERE userId = ? ;";
        const [[{ userName }]] = await conn.query(query, [userId]);
        return userName;
      } catch (error) {
        return error;
      }
      return userId;
    } catch (error) {
      return error;
    }
  }
}
