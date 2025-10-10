const app = express();
const PORT = 3000;

app,use(express.json());
app.use("/api/users", userRoutes);

app.user(cors({ origin}))