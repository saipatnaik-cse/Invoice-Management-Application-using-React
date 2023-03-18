package HRC30360W;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class InsertServlet
 */
@WebServlet("/InsertServlet")
public class InsertServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InsertServlet() {
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
		HRC30360W_POJO model2 = new Gson().fromJson(request.getReader(), HRC30360W_POJO.class);
		
		String Business_code = model2.getBusiness_code();
		int Cust_number = model2.getCust_number();
		String Clear_date = model2.getClear_date();
		int Buisness_year = model2.getBuisness_year();
		String Doc_id = model2.getDoc_id();
		String Posting_date = model2.getPosting_date();
		String Document_create_date = model2.getDocument_create_date();
		String Due_in_date = model2.getDue_in_date();
		String Invoice_currency = model2.getInvoice_currency();
		String Document_type = model2.getDocument_type();
		int Posting_id = model2.getPosting_id();
		double Total_open_amount = model2.getTotal_open_amount();
		String Baseline_create_date = model2.getBaseline_create_date();
		String Cust_payment_terms = model2.getCust_payment_terms();
		int Invoice_id = model2.getInvoice_id();
		
		
		HRC30360W_POJO model = new HRC30360W_POJO(Business_code, Cust_number, Clear_date, Buisness_year, Doc_id, Posting_date, Document_create_date, Due_in_date, Invoice_currency, Document_type, Posting_id, Total_open_amount, Baseline_create_date, Cust_payment_terms, Invoice_id);
		model.setBusiness_code(Business_code);
		model.setCust_number(Cust_number);
		model.setClear_date(Clear_date);
		model.setBuisness_year(Buisness_year);
		model.setDoc_id(Doc_id);
		model.setPosting_date(Posting_date);
		model.setDocument_create_date(Document_create_date);
		model.setDue_in_date(Due_in_date);
		model.setInvoice_currency(Invoice_currency);
		model.setDocument_type(Document_type);
		model.setPosting_id(Posting_id);
		model.setTotal_open_amount(Total_open_amount);
		model.setBaseline_create_date(Baseline_create_date);
		model.setCust_payment_terms(Cust_payment_terms);
		model.setInvoice_id(Invoice_id);
		
		Insert.insertdata(model);
	}

}
