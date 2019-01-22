
// specifying a port so production environment would work
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
