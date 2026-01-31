import fastify from "fastify";

const server = fastify({ logger: true });

const teams = [
  { id: 1, name: "McLaren Mastercard F1 Team", base: "Woking, United Kingdom" },
  {
    id: 2,
    name: "Mercedes-AMG PETRONAS Formula One Team",
    base: "Brackley, United Kingdom",
  },
  {
    id: 3,
    name: "Oracle Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
  },
  { id: 4, name: "Scuderia Ferrari HP", base: "Maranello, Italy" },
  { id: 5, name: "Atlassian Williams F1 Team", base: "Grove, United Kingdom" },
  {
    id: 6,
    name: "Visa Cash App Racing Bulls Formula One Team",
    base: "Faenza, Italy",
  },
  {
    id: 7,
    name: "Aston Martin Aramco Formula One Team",
    base: "Silverstone, United Kingdom",
  },
  { id: 8, name: "TGR Haas F1 Team", base: "Kannapolis, United States" },
  {
    id: 9,
    name: "BWT Alpine Formula One Team",
    base: "Enstone, United Kingdom",
  },
  { id: 10, name: "Audi Revolut F1 Team", base: "Hinwil, Switzerland" },
  {
    id: 11,
    name: "Cadillac Formula 1 Team",
    base: "Fishers, Indiana / Concord, North Carolina, United States",
  },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 3, name: "Landom Morris", team: "McLaren" },
];

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);

  return [teams];
});

server.get("/drivers", async (req, res) => {
  res.type("application/json").code(200);
  return [drivers];
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const driver = drivers.find((d) => d.id === id);

  if (!drivers) {
    res.type("application/json");
    return { message: "Driver not found!!" };
  } else {
    res.type("application/json");
    return { driver };
  }
});

server.listen({ port: 3333 }, () => {
  console.log("Server init");
});
