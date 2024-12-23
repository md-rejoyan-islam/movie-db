//'2024-10-22', to 24 November 2024
import bcrypt from "bcryptjs";

export const dateFormater = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const getGenresById = (genres, genreIds) => {
  return genres.filter((genre) => genreIds.includes(genre.id));
};

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
