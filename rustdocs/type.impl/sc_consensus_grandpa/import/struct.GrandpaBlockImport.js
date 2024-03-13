(function() {var type_impls = {
"frontier_template_node":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BlockImport%3CBlock%3E-for-GrandpaBlockImport%3CBE,+Block,+Client,+SC%3E\" class=\"impl\"><a href=\"#impl-BlockImport%3CBlock%3E-for-GrandpaBlockImport%3CBE,+Block,+Client,+SC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BE, Block, Client, SC&gt; BlockImport&lt;Block&gt; for GrandpaBlockImport&lt;BE, Block, Client, SC&gt;<div class=\"where\">where\n    Block: Block,\n    &lt;&lt;Block as Block&gt;::Header as Header&gt;::Number: BlockNumberOps,\n    BE: Backend&lt;Block&gt;,\n    Client: ClientForGrandpa&lt;Block, BE&gt;,\n    &lt;Client as ProvideRuntimeApi&lt;Block&gt;&gt;::Api: GrandpaApi&lt;Block&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a Client</a>: for&lt;'a&gt; BlockImport&lt;Block, Error = Error&gt;,\n    SC: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Error</a> = Error</h4></section></summary><div class='docblock'>The error type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.import_block\" class=\"method trait-impl\"><a href=\"#method.import_block\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">import_block</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 mut self,\n    block: BlockImportParams&lt;Block&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ImportResult, &lt;GrandpaBlockImport&lt;BE, Block, Client, SC&gt; as BlockImport&lt;Block&gt;&gt;::Error&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    GrandpaBlockImport&lt;BE, Block, Client, SC&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Import a block.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_block\" class=\"method trait-impl\"><a href=\"#method.check_block\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">check_block</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 mut self,\n    block: BlockCheckParams&lt;Block&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ImportResult, &lt;GrandpaBlockImport&lt;BE, Block, Client, SC&gt; as BlockImport&lt;Block&gt;&gt;::Error&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    GrandpaBlockImport&lt;BE, Block, Client, SC&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Check block preconditions.</div></details></div></details>","BlockImport<Block>","frontier_template_node::service::GrandpaBlockImport"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GrandpaBlockImport%3CBackend,+Block,+Client,+SC%3E\" class=\"impl\"><a href=\"#impl-Clone-for-GrandpaBlockImport%3CBackend,+Block,+Client,+SC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Backend, Block, Client, SC&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for GrandpaBlockImport&lt;Backend, Block, Client, SC&gt;<div class=\"where\">where\n    Block: Block,\n    SC: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; GrandpaBlockImport&lt;Backend, Block, Client, SC&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","frontier_template_node::service::GrandpaBlockImport"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-JustificationImport%3CBlock%3E-for-GrandpaBlockImport%3CBE,+Block,+Client,+SC%3E\" class=\"impl\"><a href=\"#impl-JustificationImport%3CBlock%3E-for-GrandpaBlockImport%3CBE,+Block,+Client,+SC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BE, Block, Client, SC&gt; JustificationImport&lt;Block&gt; for GrandpaBlockImport&lt;BE, Block, Client, SC&gt;<div class=\"where\">where\n    Block: Block,\n    &lt;&lt;Block as Block&gt;::Header as Header&gt;::Number: BlockNumberOps,\n    BE: Backend&lt;Block&gt;,\n    Client: ClientForGrandpa&lt;Block, BE&gt;,\n    SC: SelectChain&lt;Block&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Error</a> = Error</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_start\" class=\"method trait-impl\"><a href=\"#method.on_start\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">on_start</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 mut self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(&lt;Block as Block&gt;::Hash, &lt;&lt;Block as Block&gt;::Header as Header&gt;::Number)&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    GrandpaBlockImport&lt;BE, Block, Client, SC&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Called by the import queue when it is started. Returns a list of justifications to request\nfrom the network.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.import_justification\" class=\"method trait-impl\"><a href=\"#method.import_justification\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">import_justification</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 mut self,\n    hash: &lt;Block as Block&gt;::Hash,\n    number: &lt;&lt;Block as Block&gt;::Header as Header&gt;::Number,\n    justification: ([<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>], <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;)\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, &lt;GrandpaBlockImport&lt;BE, Block, Client, SC&gt; as JustificationImport&lt;Block&gt;&gt;::Error&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    GrandpaBlockImport&lt;BE, Block, Client, SC&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Import a Block justification and finalize the given block.</div></details></div></details>","JustificationImport<Block>","frontier_template_node::service::GrandpaBlockImport"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()