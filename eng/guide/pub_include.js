window.addEventListener('DOMContentLoaded', function() {
    const elHeader = document.querySelector('.engHeader');
    const elSitemap = document.querySelector('.sitemapNav');
    const elFooter = document.querySelector('.engFooter');

    elHeader.outerHTML = `
      <header class="engHeader">
      <div class="engHead">
        <div class="inner">
          <h1><a href="/eng/index.do" title="Go To KINFA Main"><span class="blind">KOREA INCLUSIVE FINANCE AGENCY</span></a></h1>
          <div class="engHead__util">
            <a href="/index.do" class="kor" title="Open KINFA Korean Site" target="blank"><img src="../images/ic_kor.png" alt="go to korean site"> KOR</a>
            <button type="button" class="sitemap" id="sitemapBtn" aria-expanded="false"><span class="blind">sitemap</span></button>
          </div>    
        </div> 
        <div class="sitemapNav" id="sitemapArea">
          <div class="engLnb">
            <ul>
              <li>
                <button type="button" class="engLnb__depth1" data-expanded="false">About KINFA</button>
                <div class="engLnb__sub">
                  <ul>
                    <li><a href="#n">Message from the CEO</a></li>
                    <li><a href="#n">Mission and Vision</a></li>
                    <li><a href="#n">Micro Credit Support Act</a></li>
                    <li><a href="#n">History</a></li>
                    <li><a href="#n">Organization</a></li>
                    <li><a href="#n">Ci & Mascot</a></li>
                  </ul>
                </div>            
              </li>
              <li>
                <button type="button" class="engLnb__depth1" data-expanded="false">Services</button>
                <div class="engLnb__sub">
                  <ul>
                    <li><a href="#n">Inclusive Funds Support</a></li>
                    <li><a href="#n">Guaranteed Loan Support</a></li>
                    <li><a href="#n">Credit&Debt Management Consulting Service</a></li>
                    <li><a href="#n">Inclusive Life Support</a></li>
                    <li><a href="#n">Personalized Loan Service</a></li>
                    <li><a href="#n">Protection of Original</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <button type="button" class="engLnb__depth1" data-expanded="false">Publications</button>
                <div class="engLnb__sub">
                  <ul>
                    <li><a href="#n">Videos</a></li>
                    <li><a href="#n">Annual Report</a></li>
                    <li><a href="#n">ETC</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <button type="button" class="engLnb__depth1" data-expanded="false">Network</button>
                <div class="engLnb__sub">
                  <ul>
                    <li><a href="#n">Domestic</a></li>
                    <li><a href="#n">Global</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <button type="button" class="engLnb__depth1" aria-expanded="false">Contact</button>
                <div class="engLnb__sub">
                  <ul>
                    <li><a href="#n">Headquater</a></li>
                    <li><a href="#n">Financial Inclusive Centers</a></li>
                    <li><a href="#n">1397 Inclusive Finance Call Center Introduction</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>           
      </div>
      <div class="engGnb">
        <ul>
          <li>
            <a href="#m1" class="engGnb__depth1">About KINFA</a>
            <div class="engGnb__sub">
              <div class="inner">
                <p>About KINFA</p>
                <ul>
                  <li><a href="#n">Message from the CEO</a></li>
                  <li><a href="#n">Mission and Vision</a></li>
                  <li><a href="#n">Micro Credit Support Act</a></li>
                  <li><a href="#n">History</a></li>
                  <li><a href="#n">Organization</a></li>
                  <li><a href="#n">Ci & Mascot</a></li>
                </ul>
              </div>              
            </div>            
          </li>
          <li>
            <a href="#m2" class="engGnb__depth1">Services</a>
            <div class="engGnb__sub">
              <div class="inner">
                <p>Services</p>
                <ul>
                  <li><a href="#n">Inclusive Funds Support</a></li>
                  <li><a href="#n">Guaranteed Loan Support</a></li>
                  <li><a href="#n">Credit&Debt Management Consulting Service</a></li>
                  <li><a href="#n">Inclusive Life Support</a></li>
                  <li><a href="#n">Personalized Loan Service</a></li>
                  <li><a href="#n">Protection of Original</a></li>
                </ul>
              </div>              
            </div>
          </li>
          <li>
            <a href="#m3" class="engGnb__depth1">Publications</a>
            <div class="engGnb__sub">
              <div class="inner">
                <p>Publications</p>
                <ul>
                  <li><a href="#n">Videos</a></li>
                  <li><a href="#n">Annual Report</a></li>
                  <li><a href="#n">ETC</a></li>
                </ul>
              </div>              
            </div>
          </li>
          <li>
            <a href="#m4" class="engGnb__depth1">Network</a>
            <div class="engGnb__sub">
              <div class="inner">
                <p>Network</p>
                <ul>
                  <li><a href="#n">Domestic</a></li>
                  <li><a href="#n">Global</a></li>
                </ul>
              </div>              
            </div>
          </li>
          <li>
            <a href="#m5" class="engGnb__depth1">Contact</a>
            <div class="engGnb__sub">
              <div class="inner">
                <p>Contact</p>
                <ul>
                  <li><a href="#n">Headquater</a></li>
                  <li><a href="#n">Financial Inclusive Centers</a></li>
                  <li><a href="#n">1397 Inclusive Finance Call Center Introduction</a></li>
                </ul>
              </div>              
            </div>
          </li>
        </ul>
      </div>
    </header>`;

    elFooter.outerHTML = `
      <footer class="engFooter">
      <div class="inner">
        <div class="footer__logo"><img src="../images/foot_logo.png" alt="Korea inclusive finance agency"></div>
        <address>9~12F, 14F, Grand Central, 14, Sejong-daero, Jung-gu, Seoul (Zip Code : 04527)</address>
        <div class="copyright">COPYRIGHT SINCE 2021 KOREA INCLUSIVE FINANCE AGENCY. ALL RIGHTS RESERVED.</div>
      </div>
    </footer>`;
});