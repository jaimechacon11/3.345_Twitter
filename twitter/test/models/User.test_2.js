test("Add getters", () => {
  const user = new User(1, "carlogilmar", "Carlo", "Bio");
  expect(user.getUsername).toBe("carlogilmar");
  expect(user.getBio).toBe("Bio");
  expect(user.getDateCreated).not.toBeUndefined();
  expect(user.getLastUpdated).not.toBeUndefined();
});

test("Add setters", () => {
  const user = new User(1, "carlogilmar", "Carlo", "Bio");
  user.setUsername = "Gilmar";
  expect(user.username).toBe("Gilmar");
  user.setBio = "New bio";
  expect(user.bio).toBe("New bio");
});
