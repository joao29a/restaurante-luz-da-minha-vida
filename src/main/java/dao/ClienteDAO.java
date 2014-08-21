/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package dao;

import entity.Cliente;
import javax.enterprise.context.RequestScoped;
import org.hibernate.Session;
import org.hibernate.Transaction;
import util.HibernateUtil;

/**
 *
 * @author john
 */
@RequestScoped
public class ClienteDAO {
    
    public void adicionar(Cliente cliente){
        Session session = HibernateUtil.getSession();
        Transaction tx = session.beginTransaction();
        session.save(cliente);
        tx.commit();
        session.close();
    }
}
