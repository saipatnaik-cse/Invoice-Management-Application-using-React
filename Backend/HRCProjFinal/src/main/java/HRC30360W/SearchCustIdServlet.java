package HRC30360W;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class SearchCustIdServlet
 */
@WebServlet("/SearchCustIdServlet")
public class SearchCustIdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchCustIdServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		doGet(request, response);
		
		HRC30360W_POJO model2 = new Gson().fromJson(request.getReader(), HRC30360W_POJO.class);
		
		int cust_number = model2.getCust_number();		
		
		ArrayList<HRC30360W_POJO> data = SearchCustId.searchwithcustid(cust_number);
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("data", data);
		Gson gson = new Gson();
		String respData=gson.toJson(map);
	    response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().print(respData);
	}

}
