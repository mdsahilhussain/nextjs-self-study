export const errorHandler = (
  res,
  statusCode = 500,
  message = "Internal Server Error"
) => {
  return res.status(400).json({
    success: false,
    message: "Only POST Method is allowed",
  });
};
