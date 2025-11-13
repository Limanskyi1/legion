import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_SERVICE_KEY
);

function generateUsers(count) {
  const users = [];
  for (let i = 1; i <= count; i++) {
    users.push({
      email: `user${i}@example.com`,
      password: "password123",
    });
  }
  return users;
}

async function createUser(user) {
  await supabase.auth.admin.createUser({
    email: user.email,
    password: user.password,
    email_confirm: true,
  });
}

async function createUsersInBatches(users, batchSize = 50) {
  for (let i = 0; i < users.length; i += batchSize) {
    const batch = users.slice(i, i + batchSize);
    await Promise.all(batch.map(createUser));
    console.log(`Batch ${i / batchSize + 1} completed`);
  }
}

const users = generateUsers(200);

createUsersInBatches(users).then(() => console.log("Done creating 200 users"));
