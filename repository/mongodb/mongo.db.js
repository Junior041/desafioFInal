import mongodb from "mongodb";

function getClient() {
  const uri =
    "mongodb+srv://ismael:1508@cluster0.4obqbbw.mongodb.net/?retryWrites=true&w=majority";
  return new mongodb.MongoClient(uri);
}
export { getClient };
