  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>pixi.js/src/pixi/renderers/WebGLShaders.js at master · GoodBoyDigital/pixi.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets">
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="kcdwozFQ5preAJWav2JK2XRpziTT0MzjmmP6s4h5tKs=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-6d375d1046b32bea385fa56df24f118470ed6540.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-581e6f2a8ebacc8b79dc3555aa9e332a2dde87ea.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-1eb7a462f356f970079eb78e885d3b235fb7280a.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="4bed5ac961340c3bbf5c87470c825b90">

        <link data-pjax-transient rel='permalink' href='/GoodBoyDigital/pixi.js/blob/422b60662cb2eedbfb1de104a4a1095c3b90b972/src/pixi/renderers/WebGLShaders.js'>
    <meta property="og:title" content="pixi.js"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/GoodBoyDigital/pixi.js"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/741f7295fe46f74e66407e7f6d363e65?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="pixi.js - Super fast HTML 5 2D rendering engine that uses webGL with canvas fallback"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="GoodBoyDigital/pixi.js"/>

    <meta name="description" content="pixi.js - Super fast HTML 5 2D rendering engine that uses webGL with canvas fallback" />

  <link href="https://github.com/GoodBoyDigital/pixi.js/commits/master.atom" rel="alternate" title="Recent Commits to pixi.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-icon mega-icon-invertocat"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  ">
            <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="Dokmak" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="cmdform">

    <input type="hidden" class="js-repository-name-with-owner" value="GoodBoyDigital/pixi.js"/>
    <input type="hidden" class="js-repository-branch" value="master"/>
    <input type="hidden" class="js-repository-tree-sha" value="a06d1f093e608504ae671bead16f3a3c94f91907"/>

  <div class="divider-vertical"></div>
</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="https://github.com/Dokmak" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/5049437a0fb16aa8669abe09af27cf91?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> Dokmak
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="mini-icon mini-icon-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="mini-icon mini-icon-account-settings"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="mini-icon mini-icon-create"></span> New repository</a>
    </li>
    <li>
        <a href="https://github.com/GoodBoyDigital/pixi.js/issues/new"><span class="mini-icon mini-icon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="mini-icon mini-icon-u-list"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="kcdwozFQ5preAJWav2JK2XRpziTT0MzjmmP6s4h5tKs=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="7741856" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/GoodBoyDigital/pixi.js/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/GoodBoyDigital/pixi.js/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/GoodBoyDigital/pixi.js/stargazers">1,785</a>
    </li>

        <li>
          <a href="/GoodBoyDigital/pixi.js/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/GoodBoyDigital/pixi.js/network" class="social-count">138</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/GoodBoyDigital" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">GoodBoyDigital</span>
                  </a></span> /
                <strong><a href="/GoodBoyDigital/pixi.js" class="js-current-repository">pixi.js</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/GoodBoyDigital/pixi.js/pulse" highlight="pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/GoodBoyDigital/pixi.js" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/GoodBoyDigital/pixi.js/network" highlight="repo_network">Network</a></li>
    <li><a href="/GoodBoyDigital/pixi.js/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/GoodBoyDigital/pixi.js/issues" highlight="repo_issues">Issues <span class='counter'>19</span></a></li>

      <li><a href="/GoodBoyDigital/pixi.js/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/GoodBoyDigital/pixi.js/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/GoodBoyDigital/pixi.js/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/GoodBoyDigital/pixi.js/blob/master/src/pixi/renderers/WebGLShaders.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/GoodBoyDigital/pixi.js" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/GoodBoyDigital/pixi.js/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/GoodBoyDigital/pixi.js/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:cfcb09d1c88b77104220b923479239cf -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:cfcb09d1c88b77104220b923479239cf -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/GoodBoyDigital/pixi.js" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">pixi.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/GoodBoyDigital/pixi.js/tree/master/src" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/GoodBoyDigital/pixi.js/tree/master/src/pixi" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">pixi</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/GoodBoyDigital/pixi.js/tree/master/src/pixi/renderers" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">renderers</span></a></span><span class="separator"> / </span><strong class="final-path">WebGLShaders.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="src/pixi/renderers/WebGLShaders.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/GoodBoyDigital/pixi.js/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/GoodBoyDigital/pixi.js/contributors/master/src/pixi/renderers/WebGLShaders.js">
          Fetching contributors…

          <div class="participation">
            <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif?1340659511" width="16" /></p>
            <p class="loader-error">Cannot retrieve contributors at this time</p>
          </div>
        </div>

    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/GoodBoyDigital/pixi.js/blob/422b60662cb2eedbfb1de104a4a1095c3b90b972/src/pixi/renderers/WebGLShaders.js" data-title="pixi.js/src/pixi/renderers/WebGLShaders.js at master · GoodBoyDigital/pixi.js · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>55 lines (46 sloc)</span>
                <span>1.333 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/GoodBoyDigital/pixi.js/edit/master/src/pixi/renderers/WebGLShaders.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/GoodBoyDigital/pixi.js/raw/master/src/pixi/renderers/WebGLShaders.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/GoodBoyDigital/pixi.js/blame/master/src/pixi/renderers/WebGLShaders.js" class="button minibutton ">Blame</a>
                  <a href="/GoodBoyDigital/pixi.js/commits/master/src/pixi/renderers/WebGLShaders.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><br/></div><div class='line' id='LC2'><span class="cm">/**</span></div><div class='line' id='LC3'><span class="cm"> * @author Mat Groves http://matgroves.com/ @Doormat23</span></div><div class='line' id='LC4'><span class="cm"> */</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="nx">PIXI</span><span class="p">.</span><span class="nx">shaderFragmentSrc</span> <span class="o">=</span> <span class="p">[</span></div><div class='line' id='LC7'>&nbsp;&nbsp;<span class="s2">&quot;precision mediump float;&quot;</span><span class="p">,</span></div><div class='line' id='LC8'>&nbsp;&nbsp;<span class="s2">&quot;varying vec2 vTextureCoord;&quot;</span><span class="p">,</span></div><div class='line' id='LC9'>&nbsp;&nbsp;<span class="s2">&quot;varying float vColor;&quot;</span><span class="p">,</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="s2">&quot;uniform sampler2D uSampler;&quot;</span><span class="p">,</span></div><div class='line' id='LC11'>&nbsp;&nbsp;<span class="s2">&quot;void main(void) {&quot;</span><span class="p">,</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));&quot;</span><span class="p">,</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;gl_FragColor = gl_FragColor * vColor;&quot;</span><span class="p">,</span></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="s2">&quot;}&quot;</span></div><div class='line' id='LC15'><span class="p">];</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="nx">PIXI</span><span class="p">.</span><span class="nx">shaderVertexSrc</span> <span class="o">=</span> <span class="p">[</span></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="s2">&quot;attribute vec2 aVertexPosition;&quot;</span><span class="p">,</span></div><div class='line' id='LC19'>&nbsp;&nbsp;<span class="s2">&quot;attribute vec2 aTextureCoord;&quot;</span><span class="p">,</span></div><div class='line' id='LC20'>&nbsp;&nbsp;<span class="s2">&quot;attribute float aColor;&quot;</span><span class="p">,</span></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="s2">&quot;uniform mat4 uMVMatrix;&quot;</span><span class="p">,</span></div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="s2">&quot;varying vec2 vTextureCoord;&quot;</span><span class="p">,</span></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="s2">&quot;varying float vColor;&quot;</span><span class="p">,</span></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="s2">&quot;void main(void) {&quot;</span><span class="p">,</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;gl_Position = uMVMatrix * vec4(aVertexPosition, 1.0, 1.0);&quot;</span><span class="p">,</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;vTextureCoord = aTextureCoord;&quot;</span><span class="p">,</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;vColor = aColor;&quot;</span><span class="p">,</span></div><div class='line' id='LC28'>&nbsp;&nbsp;<span class="s2">&quot;}&quot;</span></div><div class='line' id='LC29'><span class="p">];</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'><span class="nx">PIXI</span><span class="p">.</span><span class="nx">CompileVertexShader</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">gl</span><span class="p">,</span> <span class="nx">shaderSrc</span><span class="p">)</span></div><div class='line' id='LC32'><span class="p">{</span></div><div class='line' id='LC33'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">PIXI</span><span class="p">.</span><span class="nx">_CompileShader</span><span class="p">(</span><span class="nx">gl</span><span class="p">,</span> <span class="nx">shaderSrc</span><span class="p">,</span> <span class="nx">gl</span><span class="p">.</span><span class="nx">VERTEX_SHADER</span><span class="p">);</span></div><div class='line' id='LC34'><span class="p">}</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'><span class="nx">PIXI</span><span class="p">.</span><span class="nx">CompileFragmentShader</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">gl</span><span class="p">,</span> <span class="nx">shaderSrc</span><span class="p">)</span></div><div class='line' id='LC37'><span class="p">{</span></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">PIXI</span><span class="p">.</span><span class="nx">_CompileShader</span><span class="p">(</span><span class="nx">gl</span><span class="p">,</span> <span class="nx">shaderSrc</span><span class="p">,</span> <span class="nx">gl</span><span class="p">.</span><span class="nx">FRAGMENT_SHADER</span><span class="p">);</span></div><div class='line' id='LC39'><span class="p">}</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'><span class="nx">PIXI</span><span class="p">.</span><span class="nx">_CompileShader</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">gl</span><span class="p">,</span> <span class="nx">shaderSrc</span><span class="p">,</span> <span class="nx">shaderType</span><span class="p">)</span></div><div class='line' id='LC42'><span class="p">{</span></div><div class='line' id='LC43'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">src</span> <span class="o">=</span> <span class="nx">shaderSrc</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;\n&quot;</span><span class="p">);</span></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">shader</span> <span class="o">=</span> <span class="nx">gl</span><span class="p">.</span><span class="nx">createShader</span><span class="p">(</span><span class="nx">shaderType</span><span class="p">);</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="nx">gl</span><span class="p">.</span><span class="nx">shaderSource</span><span class="p">(</span><span class="nx">shader</span><span class="p">,</span> <span class="nx">src</span><span class="p">);</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="nx">gl</span><span class="p">.</span><span class="nx">compileShader</span><span class="p">(</span><span class="nx">shader</span><span class="p">);</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">gl</span><span class="p">.</span><span class="nx">getShaderParameter</span><span class="p">(</span><span class="nx">shader</span><span class="p">,</span> <span class="nx">gl</span><span class="p">.</span><span class="nx">COMPILE_STATUS</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">alert</span><span class="p">(</span><span class="nx">gl</span><span class="p">.</span><span class="nx">getShaderInfoLog</span><span class="p">(</span><span class="nx">shader</span><span class="p">));</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">shader</span><span class="p">;</span></div><div class='line' id='LC54'><span class="p">}</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.16072s from fe16.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/GoodBoyDigital/pixi.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.16127' data-host='fe16'></span>
    
  </body>
</html>

