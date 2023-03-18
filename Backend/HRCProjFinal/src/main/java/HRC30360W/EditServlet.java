package HRC30360W;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class EditServlet
 */
@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditServlet() {
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
		
		String Invoice_currency = model2.getInvoice_currency();
		String Cust_payment_terms = model2.getCust_payment_terms();
		int Sl_no = model2.getSl_no();
		
		HRC30360W_POJO model = new HRC30360W_POJO(Invoice_currency,Cust_payment_terms,Sl_no);
		
		model.setInvoice_currency(Invoice_currency);
		model.setCust_payment_terms(Cust_payment_terms);
		model.setSl_no(Sl_no);
		
		Edit.editdata(model);
	}
	
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}


}
