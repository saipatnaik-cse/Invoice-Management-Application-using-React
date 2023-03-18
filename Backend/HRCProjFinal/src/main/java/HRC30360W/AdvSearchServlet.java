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
 * Servlet implementation class AdvSearchServlet
 */
@WebServlet("/AdvSearchServlet")
public class AdvSearchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdvSearchServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//HRC30360W_POJO model2 = new Gson().fromJson(request.getReader(), HRC30360W_POJO.class);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HRC30360W_POJO model2 = new Gson().fromJson(request.getReader(), HRC30360W_POJO.class);
		
		String Doc_id = model2.getDoc_id();
		int Invoice_id = model2.getInvoice_id();
		int Cust_number = model2.getCust_number();
		int Buisness_year = model2.getBuisness_year();
		
		
		ArrayList<HRC30360W_POJO> data = AdvSearch.advsearch(Doc_id,Invoice_id,Cust_number,Buisness_year);
		
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("data", data);
		Gson gson = new Gson();
		String respData=gson.toJson(map);
	    response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().print(respData);	

	}

}
