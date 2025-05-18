import UserLayout from "./components/layout/UserLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "sonner";
const App = () => {
	return (
		<BrowserRouter>
		<Toaster position = "top-right"/>
			<Routes>
				{/*User Layout*/}
				<Route path="/" element={<UserLayout />}>
					<Route index element={<Home />} />
				</Route>

				<Route>{/*Admin Layout*/}</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
