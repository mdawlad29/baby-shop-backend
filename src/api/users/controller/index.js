const createUser = async (req, res) => {
  res.status(201).json({
    status: 201,
    success: true,
    message: "User create successful.",
    data: {},
  });
};

export { createUser };
